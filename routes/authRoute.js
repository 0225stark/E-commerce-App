import express  from "express";
import { 
    registerController, 
    loginController, 
    testController, 
    forgotPasswordController, 
    updateProfileController, 
    getOrdersController, 
    getAllOrdersController, 
    orderStatusController 
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();        //router object

//Routing

//1. Register and Method is Post
router.post("/register", registerController);

//2. Login and Method is Post
router.post("/login",loginController);

//3. Test routes and method is Get
router.get('/test',requireSignIn , isAdmin,testController);

// 4. Protected user route auth
router.get("/user-auth", requireSignIn, (req,res) => {
    res.status(200).send({ok: true});
});

//5. Forgot Password and Method is Post
router.post("/forgot-password", forgotPasswordController);

//6. Protected admin route auth
router.get("/admin-auth", requireSignIn,isAdmin, (req,res) => {
    res.status(200).send({ok: true});
});

//7. update profile
router.put('/profile', requireSignIn, updateProfileController)

//8. orders
router.get("/orders", requireSignIn, getOrdersController);

//9. all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

//10. order status update
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController);

export default router;