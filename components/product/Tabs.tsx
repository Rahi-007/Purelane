import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import DescriptionRenderer from "./DescriptionRenderer";

export type DescriptionBlock =
    | {
        type: "heading";
        text: string;
    }
    | {
        type: "paragraph";
        text: string;
    }
    | {
        type: "image";
        image: string;
    }
    | {
        type: "images";
        image: string[];
    }
    | {
        type: "list";
        items: string[];
    };

export interface Product {
    id: number;
    name: string;
    variant: string;
    sku: string;
    discountPrice: number;
    price: number;
    review: number;
    isFreeShipping: boolean;
    narration: string;
    image: string[];
    category: string[];
    additionalInfo: Record<string, string | undefined>;
    description: {
        blocks: DescriptionBlock[];
    };
};

interface ProductDetailsProps {
    product: Product;
}

const Tabbar = ({ product }: ProductDetailsProps) => {
    return (
        <Tabs defaultValue="description" className="mt-0 w-full">
            <TabsList className="bg-transparent rounded-none border-b w-full p-0">
                <TabsTrigger
                    value="description"
                    className="text-sm sm:text-lg font-medium rounded-none data-[state=active]:shadow-[0_6px_20px_rgba(0,0,0,0.5)] cursor-pointer data-[state=active]:text-black"
                >
                    Item Description
                </TabsTrigger>

                <TabsTrigger
                    value="additional"
                    className="text-sm sm:text-lg font-medium rounded-none data-[state=active]:shadow-[0_6px_20px_rgba(0,0,0,0.5)] cursor-pointer data-[state=active]:text-black"
                >
                    Additional Information
                </TabsTrigger>

                <TabsTrigger
                    value="reviews"
                    className="hidden sm:block text-sm sm:text-lg font-medium rounded-none data-[state=active]:shadow-[0_6px_20px_rgba(0,0,0,0.5)] cursor-pointer data-[state=active]:text-black"
                >
                    Customer Reviews
                </TabsTrigger>
            </TabsList>

            <TabsContent value="description">
                <DescriptionRenderer
                    blocks={product.description.blocks}
                />
            </TabsContent>
            <TabsContent value="additional">
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 text-sm sm:text-base">
                        <tbody>
                            {Object.entries(product.additionalInfo).map(([key, value]) => (
                                <tr key={key} className="border-b border-gray-200">
                                    <td className="w-1/3 bg-gray-50 px-4 py-3 font-medium">
                                        {key}
                                    </td>
                                    <td className="px-4 py-3 text-gray-700">
                                        {String(value)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </TabsContent>

            <TabsContent value="reviews">
                <div className="mt-6 text-gray-600 text-sm sm:text-base">
                    {/* {product.review} customer reviews */}
                </div>
            </TabsContent>
        </Tabs>
    )
}

export default Tabbar;