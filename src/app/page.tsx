
import Banner1 from "@/components/banner1"
import Banner2 from "@/components/banner2"
import Category from "@/components/category"
import Discountproducts from "@/components/discountproducts"
import Footer from "@/components/footer"
import Grid from "@/components/grid"
import Header from "@/components/header"
import Products from "@/components/products"
import Smallbanner from "@/components/smallbanner"
export default function Home() {
  return (
    <div>
  <Header />
  <Banner1 />
  <Smallbanner />
  <Category />
  <Grid />
  <Products />
  <Discountproducts />
  <Banner2 />
  <Footer />
  </div>
  )}