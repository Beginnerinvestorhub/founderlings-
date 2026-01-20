
# Founderlings - Beginner Investor Hub

Landing page for the first 1,000 founding members of [Beginner Investor Hub](https://beginnerinvestorhub-demo.vercel.app) - a production-grade AI investing education platform.

## About Beginner Investor Hub

An intelligent investment learning platform combining portfolio simulation, AI-driven behavioral nudges, and personalized learning paths built from scratch in 10 months by a self-taught developer.

**Platform Architecture:**
- 14 microservices (12 Python, 2 Node.js)
- AI/ML engine (VertexAI, TensorFlow, scikit-learn)
- Real-time market data ingestion with multi-provider failover
- Adaptive learning system with VARK assessment
- Behavioral nudge engine with A/B testing
- Portfolio risk analysis (VaR, Sharpe ratio, beta)
- PostgreSQL + Prisma ORM + Redis caching
- Docker containerized deployments
- Google Cloud infrastructure with Terraform

## Founderlings Program

Founderlings are the first 1,000 founding members who get exclusive lifetime benefits and help shape the platform's future.

### Benefits

- 🎖️ **Lifetime 20% Discount** - Forever pricing advantage
- ⚙️ **Exclusive Badge & Status** - Numbered member #1-1000  
- 🚀 **Early Feature Access** - First to try everything new
- 🤖 **Train the AI** - Help improve the learning algorithms
- 👥 **Private Community** - Founderlings-only Discord
- 📜 **Founding Member Recognition** - Your legacy in the platform

## Tech Stack

**Landing Page:**
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + mechanica design system
- Email: Formspree integration
- Deployment: Vercel

**Main Platform:**
- Backend: 12 Python microservices (FastAPI) + 2 Node.js services (Express)
- Frontend: Next.js 14, React, TypeScript
- Database: PostgreSQL with Prisma ORM
- Cache: Redis
- AI/ML: VertexAI, TensorFlow, scikit-learn, pandas, NumPy
- Auth: Firebase Admin SDK
- Infrastructure: Docker, Google Cloud Run, Terraform
- CI/CD: Google Cloud Build
- Queue: BullMQ for async processing
- Market Data: Alpha Vantage, Finnhub, Polygon.io (multi-provider)

## Design System - mechanica

Built with a custom design system combining industrial aesthetics with modern web design:
- Moonlight blue metallic primary colors
- Brass and copper accent tones
- Wood-finish gradients (#f5e6d3 birch palette)
- Animated gear components
- Mechanical-inspired spacing system
- Custom typography stack (Roboto Mono, Inter, Playfair Display)
- Accessibility-first (respects prefers-reduced-motion)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Main Platform Features

### 1. AI-Powered Learning Engine
- VARK assessment (Visual, Auditory, Reading, Kinesthetic)
- Continuous feedback loops that adapt to user behavior
- ML-powered content recommendations
- Personalized learning paths

### 2. Behavioral Nudge System
- Smart notifications based on user patterns
- A/B testing framework for optimization
- Queue-based async processing (BullMQ)
- Intelligent throttling to prevent notification fatigue

### 3. Portfolio Simulation
- Real-time market data integration
- Risk analysis engine (institutional-grade metrics)
- Multi-provider failover (Alpha Vantage → Finnhub → Polygon)
- WebSocket support for live updates

### 4. Gamification
- XP and achievement system
- Streak tracking
- Leaderboards
- Progress visualization

## Architecture Highlights

**Microservices:**
1. Backend API (Node.js) - API Gateway & orchestration
2. Market Data Ingestion (Node.js) - Real-time & historical data
3. AI Engine (Python) - VertexAI integration
4. Behavioral Nudge Engine (Node.js) - Smart notifications
5. Learning AI (Python) - Adaptive learning & VARK
6. Risk Engine (Python) - Portfolio analytics
7. Portfolio Simulation (Python) - Trading simulation
8. Gamification Service (integrated)
9-14. Additional specialized services

**Infrastructure:**
- Docker containerization
- Google Cloud Run deployment
- Terraform infrastructure as code
- Cloud Build CI/CD pipeline
- Redis caching layer
- PostgreSQL database with Prisma migrations

## Project Background

Built by Kevin Ringler:
- 13 years running carpentry and cabinet-making business (2012-2025)
- Self-taught developer (started January 2025)
- Built entire platform in 10 months on a 4GB laptop
- No formal CS education or bootcamp
- Applying to Y Combinator

### Technical Journey

**Constraints:**
- Limited to 4GB RAM laptop
- Zero coding experience at start
- No budget for cloud services during development
- Solo developer (no team)

**What Was Built:**
- 14 production microservices
- Complete CI/CD pipeline
- Multi-provider API integration with failover
- Machine learning pipelines
- Real-time data processing
- Queue-based async architecture
- Infrastructure automation
- Full authentication system
- Database design and migrations

**Skills Acquired:**
- Python (FastAPI, TensorFlow, scikit-learn, pandas)
- Node.js / TypeScript (Express)
- React / Next.js
- PostgreSQL + Prisma ORM
- Redis
- Docker
- Google Cloud Platform
- Terraform
- System architecture
- API design
- ML/AI integration
- Real-time data processing
- Queue management
- DevOps practices

## Links

- **Landing Page:** [founderlings.vercel.app](https://founderlings.vercel.app)
- **Main Demo:** [beginnerinvestorhub-demo.vercel.app](https://beginnerinvestorhub-demo.vercel.app)
- **Main Repo:** [github.com/Beginnerinvestorhub/beginner-investor-api](https://github.com/Beginnerinvestorhub/beginner-investor-api)
- **Email:** beginnerinvestorhub@gmail.com

## Contributing

This is part of a YC application. Not currently accepting outside contributions.

## License

Private - All rights reserved

---

**🎯 Join the first 1,000 Founderlings**  
Limited spots • Lifetime benefits • Help shape the future of AI investing education

**After 1,000 members, this program closes forever.**


