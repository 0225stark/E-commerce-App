import express from "express";
import { 
    brainTreePaymentController, 
    braintreeTokenController, 
    createProductController, 
    deleteProductController, 
    getProductController, 
    getSingleProductController, 
    productCategoryController, 
    productCountController, 
    productFiltersController, 
    productListController, 
    productPhotoController, 
    realtedProductController, 
    searchProductController, 
    updateProductController 
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

// Routing

// 1. create product
router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

// 2. update product
router.put("/update-product/:pid", requireSignIn, isAdmin, formidable(), updateProductController);

// 3. get products
router.get("/get-product", getProductController);

// 4. get single product
router.get("/get-product/:slug", getSingleProductController);

// 5. get photo
router.get("/product-photo/:pid", productPhotoController);

// 6. delete product
router.delete("/delete-product/:pid", deleteProductController);

// 7. filter product
router.post('/product-filters', productFiltersController)

// 8. product count
router.get("/product-count", productCountController);

// 9. product per page
router.get("/product-list/:page", productListController);

// 10. search product
router.get("/search/:keyword", searchProductController);

// 11. similar product
router.get("/related-product/:pid/:cid", realtedProductController);

// 12. category wise product
router.get("/product-category/:slug", productCategoryController);

// 13. payments routes
// a. token
router.get("/braintree/token", braintreeTokenController);

// b. payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;