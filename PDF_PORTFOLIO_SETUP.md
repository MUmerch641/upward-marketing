# 📄 How to Add Your Company Profile Design PDFs

## Step 1: Create PDF Folder
1. Create a folder named `pdfs` in your `public` directory:
   ```
   public/
   └── pdfs/
       ├── tech-startup-profile.pdf
       ├── manufacturing-profile.pdf
       ├── healthcare-profile.pdf
       └── restaurant-profile.pdf
   ```

## Step 2: Add Your PDF Files
- Copy your Company Profile Design PDFs to the `public/pdfs/` folder
- Use descriptive names like:
  - `company-profile-tech.pdf`
  - `company-profile-healthcare.pdf`
  - `company-profile-restaurant.pdf`

## Step 3: Update Portfolio Data
Edit the `portfolioItems` array in `src/sections/portfolioGallery/PortfolioGallery.jsx`:

```jsx
const portfolioItems = [
  {
    id: 1,
    title: "Your Company Profile Title",
    category: "company-profile",
    pdfUrl: "/pdfs/your-pdf-file.pdf",
    description: "Brief description of this company profile"
  },
  // Add more items...
]
```

## Step 4: Optional - Add Thumbnail Images
- Create folder: `public/images/portfolio/`
- Add thumbnail images (jpg/png) for each PDF
- Update the `thumbnail` property in portfolioItems

## Features Included:
✅ **Simple & Sleek Design** - Clean, modern interface
✅ **PDF Viewer** - Click to view PDFs in new tab
✅ **Download Option** - Easy download with one click
✅ **Category Filtering** - Filter by design type
✅ **Responsive Design** - Works on all devices
✅ **Smooth Navigation** - Auto-scroll from service section
✅ **Professional Layout** - Matches your brand colors

## Usage:
1. Visitors can click "View Portfolio Samples" in the Service Section
2. Browse and filter your company profile designs
3. View PDFs directly or download them
4. Contact you for custom design work

Your PDF portfolio is now integrated seamlessly into your website! 🎨
