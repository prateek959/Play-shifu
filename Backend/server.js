import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  subtitle: String,
  rating: Number,
  price: Number,
  description: [String],
  features: [String],
  images: [String],
  specifications: {
    age: String,
    batteries: String,
    dimensions: String,
    weight: String
  },
  inStock: Boolean,
  reviews: [{
    rating: Number,
    comment: String,
    author: String,
    date: Date
  }],
  relatedProducts: [{
    id: String,
    name: String,
    price: Number,
    image: String
  }]
});

const Product = mongoose.model("Product", productSchema);

// API Routes
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Seed Initial Data
const seedData = async () => {
  try {
    await Product.deleteMany({});
    const product = new Product({
      name: "Junior Genius Pack",
      subtitle: "Plugo Count & Plugo Letter & Plugo Link",
      rating: 4.5/5 ,
      price: 3749,
      description:[
        "Plugo Count - An interactive math learning kit to master essential math skills, including addition, subtraction, multiplication, and division.",
        "Plugo Letters - A letter toy that encourages children to spell using the toy to solve word puzzles on the screen.",
        "Plugo Link - Build shapes using the magnetic tiles off-screen to solve puzzles on-screen!"],
      features: [
        "Interactive learning games and activities",
        "STEM-focused educational content",
        "Physical and digital play combination",
        "Progress tracking and rewards system",
        "Multiple difficulty levels for different ages",
        "No batteries required",
        "Durable and child-safe materials",
        "Compatible with iOS and Android devices"
      ],
      images: [
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-1.webp&w=640&q=100",
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-3.webp&w=640&q=100",
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-4.webp&w=640&q=100",
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-6.webp&w=640&q=100",
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-7.webp&w=640&q=100"
      ],
      specifications: {
        age: "6-12 years",
        batteries: "Not required",
        dimensions: "12 x 9 x 2 inches",
        weight: "1.5 lbs"
      },
      inStock: true,
      reviews: [
        {
          rating: 5,
          comment: "My kids love this educational toy! It's both fun and educational.",
          author: "Sarah Johnson",
          date: new Date("2023-05-15")
        },
        {
          rating: 4,
          comment: "Great product for learning STEM concepts. The app integration is smooth.",
          author: "Michael Brown",
          date: new Date("2023-06-20")
        },
        {
          rating: 5,
          comment: "Perfect gift for my niece. She's been learning so much while having fun!",
          author: "Emily Davis",
          date: new Date("2023-07-10")
        }
      ],
      relatedProducts: [
        {
          id: "1",
          name: "Math Genius Pack",
          price: 39.99,
          image: "/assets/images/math-genius-pack.jpg"
        },
        {
          id: "2",
          name: "Science Explorer Kit",
          price: 44.99,
          image: "/assets/images/science-explorer-kit.jpg"
        },
        {
          id: "3",
          name: "Language Learning Pack",
          price: 34.99,
          image: "/assets/images/language-learning-pack.jpg"
        }
      ]
    });

    await product.save();
    console.log(" Data seeded successfully");
  } catch (error) {
    console.error(" Error seeding data:", error);
  }
};

// Seed Data on Start
seedData();

app.listen(5000, () => {
  console.log("🚀 Server is running on http://localhost:5000");
});
