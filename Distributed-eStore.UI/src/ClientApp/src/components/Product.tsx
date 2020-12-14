import { IProduct } from '../state/products/';

type ProductProps = IProduct;

const Product: React.FC<ProductProps> = ({
    id,
    name,
    description,
    price,
    colors,
    imageURLs
}) => {
    return <div></div>;
}

<li class="product-listing col-6 col-3-md mg">
    <a href="/products/sherpa-9l-sidekick" class="no-u">
        <div class="image-aspect-ratio-box--hover"><img sizes="100vw" alt="Sherpa 9L Sidekick" src="//cdn.shopify.com/s/files/1/0287/3670/products/F21_Acessories-164_x500.jpg?v=1606416092" class="primary-product-image"> <img sizes="100vw" alt="Sherpa 9L Sidekick" src="//cdn.shopify.com/s/files/1/0287/3670/products/holidaylifestyle-web547_1_x500.jpg?v=1606416092" class="secondary-product-image"></div>
            <div class="text-align--center colorama-product-text-wrapper">
                <p class="product-name">
                    <!---->Sherpa 9L Sidekick
         </p>
                <p class="product-price">
                    <span class="price">$88</span> <!---->
         </p>
            </div>
   </a>
            <div class="collection-swatches"><a title="Sherpa 9L Sidekick" class="swatch selected"><span style="background-position: center center; background-color: white; background-image: url(&quot;//cdn.shopify.com/s/files/1/0287/3670/t/419/assets/white_50x.png?v=16611450800844892646&quot;);">