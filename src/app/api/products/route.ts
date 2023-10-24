import { NextResponse } from "next/server";
import { productData } from "../../../constanst/data";

export const GET = async () => {
  try {
    return NextResponse.json({
      message: "Products fetched succesfully!",
      success: true,
      productData,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Product loading error",
      },
      { status: 500 }
    );
  }
};
