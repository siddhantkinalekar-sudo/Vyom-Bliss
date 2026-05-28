# Vyom Bliss - Premium Handcrafted Chocolate Website

A luxury, fully working single-page e-commerce website designed for **Vyom Bliss** — a premium handcrafted chocolate seller based in Mumbai, India.

---

## 🎨 Branding & Identity

- **Brand Name:** Vyom Bliss
- **Tagline:** *"Crafted with Love, Melted with Luxury"*
- **Location:** Mumbai, India
- **Tech Stack:** HTML5, Vanilla CSS3, Vanilla JavaScript, Firebase SDK (v9 Compat)
- **Primary Color Scheme:** Deep Rich Chocolate Browns (`#5C1A00`, `#6B1A00`) and Warm Caramel Golds (`#C8860A`, `#D4A030`).

---

## ⚙️ Quick Configuration (Before Launch)

To configure the live website for your brand:

### 1. Update Owner Info
Open [js/app.js](file:///c:/CS/Vyom/Bliss/js/app.js) and modify the top configuration constants:
```javascript
// OWNER CONFIGURATION
const OWNER_PHONE = "91XXXXXXXXXX"; // Replace with your 12-digit WhatsApp phone number (with country code, no + signs)
```

Open [index.html](file:///c:/CS/Vyom/Bliss/index.html) and search for the placeholder contacts in the footer to customize them:
*   Update `+91 XXXXX XXXXX` with your contact number.
*   Update `hello@vyombliss.in` with your business email.

### 2. Connect Your Firebase Console
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new Firebase Web Project.
3. Enable **Cloud Firestore Database**.
4. In Project Settings, copy your **Web App SDK Config** and paste it into the `firebaseConfig` block inside `js/app.js`:
```javascript
// FIREBASE CONFIGURATION
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

## 📦 Database Schema Setup

If Firebase is not configured or fails to load, the site will automatically fallback to local JSON data seamlessly. To load your active menu directly from Firestore, populate the following collections:

### 1. `products` Collection
Create a collection named `products` with individual documents representing products:
- **`productId`**: `string` (Auto-generated document ID)
- **`name`**: `string` (e.g. `Classic Milk Bites`)
- **`category`**: `string` (`signature` | `flavoured` | `truffle` | `gift` | `addon`)
- **`price`**: `number` (Integer, e.g. `20`)
- **`description`**: `string` (Max 100 characters)
- **`ingredients`**: `string` (e.g. `Milk chocolate, sugar, cocoa butter`)
- **`weight`**: `string` (e.g. `per piece` or `12 pieces`)
- **`emoji`**: `string` (Single emoji, e.g. `🍬`)
- **`badge`**: `string` (`bestseller` | `new` | `""`)
- **`inStock`**: `boolean` (`true` or `false`)
- **`displayOrder`**: `number` (Integer sorting index, e.g. `1` to `19`)

### 2. `coupons` Collection
Create a collection named `coupons` with custom document IDs matching the coupon code string (e.g. `FIRST10`):
- **`code`**: `string` (e.g. `FIRST10` - must match Document ID in UPPERCASE)
- **`discountPercent`**: `number` (e.g. `10` or `20`)
- **`description`**: `string` (e.g. `10% off your first order`)
- **`active`**: `boolean` (`true` | `false`)
- **`usageLimit`**: `number` (`0` for unlimited)
- **`validUntil`**: `timestamp` or `null`

---

## 🔒 Firestore Security Rules
Paste the following security rules into the **Rules** tab of your Firestore Database in the Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /products/{productId} {
      allow read: if true;
      allow write: if false;
    }

    match /orders/{orderId} {
      allow create: if
        request.resource.data.keys().hasAll([
          'orderId','status','source',
          'customer','delivery','items','pricing','meta'
        ]) &&
        request.resource.data.status == 'New' &&
        request.resource.data.source == 'website' &&
        request.resource.data.items.size() > 0 &&
        request.resource.data.pricing.grandTotal > 0;
      allow read, update, delete: if false;
    }

    match /coupons/{couponId} {
      allow read: if true;
      allow write: if false;
    }

    match /analytics/{docId} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

---

## 📈 Firestore Index Configurations
Add the following composite indexes in the Firebase Console under **Firestore Database -> Indexes**:

1. **`orders` Collection Index**
   - Field 1: `status` (Ascending)
   - Field 2: `placedAt` (Descending)
   - Query Scope: Single Collection

2. **`products` Collection Index**
   - Field 1: `category` (Ascending)
   - Field 2: `displayOrder` (Ascending)
   - Query Scope: Single Collection

3. **`analytics` Collection Index**
   - Field 1: `event` (Ascending)
   - Field 2: `timestamp` (Descending)
   - Query Scope: Single Collection

---

## 💻 Local Testing & Hosting

To view and test the website locally, launch a local web server from this directory.

For example, using `npx` with Python or Node.js:
```bash
# Using Node's light-server or live-server
npx live-server

# Or using Python's built-in server
python -m http.server 8080
```
Then visit `http://localhost:8080` (or the port specified by live-server) in your browser.
