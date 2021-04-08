import userRoutes from "./users/user.routes";
import postRoutes from "./posts/post.routes";
import productRoutes from "./products/product.routes";
import branchRoutes from "./branch/branch.routes";
import deliveryRoutes from "./delivery/delivery.routes";
import orderRoutes from "./order/order.routes";
import feedbackRoutes from "./feedback/feedback.routes";
import cartRoutes from "./cart/cart.routes";
import wishlistRoutes from "./products/wishlist.routes";
import stockRoutes from "./stock/stock.routes";

export default (app) => {
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/posts", postRoutes);
  app.use("/api/v1/products", productRoutes);
  app.use("/api/v1/branch", branchRoutes);
  app.use("/api/v1/delivery", deliveryRoutes);
  app.use("/api/v1/order", orderRoutes);
  app.use("/api/v1/feedback", feedbackRoutes);
  app.use("/api/v1/cart", cartRoutes);
  app.use("/api/v1/wishlist", wishlistRoutes);
  app.use("/api/v1/stock", stockRoutes);

};
