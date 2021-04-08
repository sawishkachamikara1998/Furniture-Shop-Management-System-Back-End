import userRoutes from "./users/user.routes";
import postRoutes from "./posts/post.routes";
import productRoutes from "./products/product.routes";

export default (app) => {
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/posts", postRoutes);
  app.use("/api/v1/products", productRoutes);

};
