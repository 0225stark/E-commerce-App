import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import { 
    categoryControlller, 
    createCategoryController, 
    deleteCategoryCOntroller, 
    singleCategoryController, 
    updateCategoryController 
} from "./../controllers/categoryController.js";

const router = express.Router();

// Routing

// 1. create category
router.post("/create-category", requireSignIn, isAdmin, createCategoryController);

// 2. update category
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController);

// 3. getALl category
router.get("/get-category", categoryControlller);

// 4. single category
router.get("/single-category/:slug", singleCategoryController);

// 5. delete category
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategoryCOntroller);

export default router;