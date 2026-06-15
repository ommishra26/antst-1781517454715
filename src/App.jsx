import { useMemo, useState } from "react";

const appSchema = {
  "type": "multi-screen-app",
  "title": "antst",
  "entry": "home",
  "flow": {
    "home": "detail",
    "detail": "cart",
    "upload": "home",
    "cart": "home"
  },
  "screens": {
    "home": {
      "type": "ecommerce",
      "title": "Home / Products",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "maxWidth": "",
              "height": "200px",
              "backgroundColor": "#1E293B",
              "textColor": "#FFFFFF",
              "borderRadius": "16px",
              "shadow": true,
              "padding": "34px",
              "type": "banner",
              "title": "RapidMart Marketplace",
              "subtitle": "Curated deals across everyday marketplace categories.",
              "id": "1596c961-c81e-44f5-92b5-1562dfabd4ef"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Grid",
              "columns": 5,
              "gap": 16,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Electronics",
                  "value": "Audio and devices",
                  "targetScreen": "",
                  "id": "d40be837-7c81-45a8-8705-4e1c6c1fc6ab"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Fashion",
                  "value": "Shoes and apparel",
                  "targetScreen": "",
                  "id": "ab2ab913-e033-41b4-a37e-ecc136077078"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Home",
                  "value": "Kitchen and decor",
                  "targetScreen": "",
                  "id": "e62dcc30-1bba-4b14-aed0-73e211ecc4b7"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Sports",
                  "value": "Fitness gear",
                  "targetScreen": "",
                  "id": "44fde2e5-f20e-457d-96b9-66725211d0e4"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Books",
                  "value": "Fiction and learning",
                  "targetScreen": "",
                  "id": "3f919358-27d7-4910-8ed1-84ccf682b372"
                }
              ],
              "id": "94198106-16da-4754-9fab-3ab44cd876e5",
              "width": "100%"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Featured Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Noise Canceling Headphones",
                  "price": "$129 | 4.8 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "c70e996a-159e-4480-83d2-8f6bf33a773d"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Smart Home Speaker",
                  "price": "$89 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "6144f188-5809-4a54-b7ff-9fdb40c8c99e"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Travel Backpack",
                  "price": "$74 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "a1dc6d5f-7479-495a-b86d-8188ed2c3d7b"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Kitchen Air Fryer",
                  "price": "$119 | 4.5 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "93b51133-58a2-4891-abe4-8557a57a1943"
                }
              ],
              "id": "6654db94-a531-4b50-9a7f-09c23144dd25"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Popular Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Fitness Watch",
                  "price": "$149 | 4.4 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "bbc967bc-1432-4587-9c99-57deff9d00bd"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Desk Lamp Pro",
                  "price": "$42 | 4.9 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "7aac7529-9b7f-40f9-9dbb-a083ac92b31a"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Wireless Charger",
                  "price": "$29 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "7d89f1a5-2888-4194-ae74-e53a6a53ecd1"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Coffee Maker",
                  "price": "$96 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "e0752dab-e72c-486f-9601-5a6e8d14158b"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Running Shoes",
                  "price": "$68 | 4.5 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "0643b4c9-660b-46d0-abdd-daa08056efed"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Bestseller Novel",
                  "price": "$18 | 4.8 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "2d21af51-25b5-4583-a502-4f6f906dd146"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Yoga Mat Pro",
                  "price": "$34 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "849c087d-e6a2-4f88-b145-eb88895b31de"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Cotton Hoodie",
                  "price": "$52 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "27773bfc-6eb6-4407-a1a2-d4298274276b"
                }
              ],
              "id": "e57a7197-2592-4307-9d99-c483fc4e1252"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "maxWidth": "",
              "height": "auto",
              "backgroundColor": "#1E293B",
              "textColor": "#FFFFFF",
              "borderRadius": "16px",
              "shadow": true,
              "padding": "26px",
              "type": "banner",
              "title": "Deal of the Day",
              "subtitle": "Save on top-rated tech bundles before midnight.",
              "id": "9ff4464b-f9ae-476e-b758-f2a8fa051ccc"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 14,
              "justify": "center",
              "align": "center",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#7C3AED",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Sell on RapidMart",
                  "action": "go-to-screen",
                  "targetScreen": "upload",
                  "id": "1be91508-aa39-4431-906c-3597e6f44e42"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "View Cart",
                  "action": "go-to-screen",
                  "targetScreen": "cart",
                  "id": "f0998f2d-28cb-4125-bfe2-60771641a1b3"
                }
              ],
              "id": "d8bbceaa-7235-460c-b543-c1ad2661a9ce"
            }
          ],
          "id": "5fa8c3f4-236a-4d9d-bb2e-388e72d98fa0"
        }
      ]
    },
    "detail": {
      "type": "ecommerce",
      "title": "Product Detail",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 36,
              "justify": "start",
              "align": "stretch",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "44%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "340px",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "30px",
                      "type": "card",
                      "title": "Product Gallery",
                      "value": "Large product image placeholder",
                      "targetScreen": "",
                      "id": "af697e77-0d4e-435f-b39b-0d826295a435"
                    }
                  ],
                  "id": "69cc4568-0d03-4ade-bdec-51c42239739c"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "52%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "26px",
                      "type": "card",
                      "title": "Noise Canceling Headphones",
                      "value": "Premium wireless audio with adaptive sound and long battery life.",
                      "targetScreen": "",
                      "id": "799da8e0-06fa-4504-a9b5-906aaa4d6e78"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Price",
                      "value": "$129",
                      "targetScreen": "",
                      "id": "6ac035be-6de6-4841-9baf-920d1357fbc0"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Rating",
                      "value": "4.8 stars | 2,481 reviews",
                      "targetScreen": "",
                      "id": "4054d977-a4c7-413f-a3bc-da5bb2437864"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "26px",
                      "type": "card",
                      "title": "Description",
                      "value": "Active noise cancellation, soft ear cushions, quick charge, and travel case.",
                      "targetScreen": "",
                      "id": "fa136d2d-eb79-43c5-8b72-82d90bb942db"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "type": "row",
                      "gap": 12,
                      "justify": "start",
                      "align": "center",
                      "wrap": true,
                      "children": [
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#7C3AED",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Buy Now",
                          "action": "go-to-screen",
                          "targetScreen": "cart",
                          "id": "23c338a2-5f5a-49c4-85fe-f6848d2edb11"
                        },
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#1E293B",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Add To Cart",
                          "action": "go-to-screen",
                          "targetScreen": "cart",
                          "id": "6d927e66-b142-4ba1-b185-b89e26c27886"
                        }
                      ],
                      "id": "b9860d3d-5aab-43c0-9d1a-7188a497ef6c"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "widthMode": "auto",
                      "maxWidth": "",
                      "height": "46px",
                      "backgroundColor": "#334155",
                      "textColor": "#FFFFFF",
                      "borderRadius": "12px",
                      "padding": "12px 24px",
                      "fontSize": "15px",
                      "fontWeight": "600",
                      "alignment": "left",
                      "type": "button",
                      "label": "Back To Products",
                      "action": "go-to-screen",
                      "targetScreen": "home",
                      "id": "a759c211-f284-4dc7-b149-7a37dfdf1dc2"
                    }
                  ],
                  "id": "175bf61a-95b8-4bdb-9848-882fc52f502d",
                  "gap": 18
                }
              ],
              "id": "ebd877cb-ef34-4171-8a27-ea43cac25aeb"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Related Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Smart Home Speaker",
                  "price": "$89 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "5690b853-b02f-414e-931d-8cf62008ae48"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Travel Backpack",
                  "price": "$74 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "009bad7b-02fc-4f35-b62b-80af16b6b089"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Fitness Watch",
                  "price": "$149 | 4.4 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "70a0e887-7b28-478d-ac98-4d9c5f325caf"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Desk Lamp Pro",
                  "price": "$42 | 4.9 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "7205305b-fe39-4bf5-bc4c-0761272bddd5"
                }
              ],
              "id": "51403a29-91a7-4b66-8662-d2610c562d7c"
            }
          ],
          "id": "b0292313-25da-4ccd-863b-fb8931402c0e"
        }
      ]
    },
    "upload": {
      "type": "ecommerce",
      "title": "Upload Product",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "maxWidth": "",
          "height": "170px",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "16px",
          "shadow": true,
          "padding": "30px",
          "type": "banner",
          "title": "Seller Center",
          "subtitle": "Create a polished product listing.",
          "id": "02c2028b-fd50-4627-9a2c-8f6b2a1f415c"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Product Listing Form",
          "padding": "30px",
          "margin": "0",
          "maxWidth": "740px",
          "backgroundColor": "#1E293B",
          "borderRadius": "16px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "productName",
              "placeholder": "Product name",
              "inputType": "text",
              "id": "9b9774cb-bee5-463c-bff7-6e0fd673afe0"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "category",
              "placeholder": "Category",
              "inputType": "text",
              "id": "0a3cec25-8396-484a-ab69-8c2830b23e66"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "price",
              "placeholder": "Price",
              "inputType": "text",
              "id": "c7b5fc59-4903-4753-a697-18721fb3fa9f"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "description",
              "placeholder": "Short description",
              "inputType": "text",
              "id": "91f5f086-d7b9-4a29-8a00-e60878b93dfb"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "imageUrl",
              "placeholder": "Image upload URL",
              "inputType": "text",
              "id": "b4e6dbab-5621-4ed8-a27a-fc60efdf1a1d"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 12,
              "justify": "center",
              "align": "center",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#7C3AED",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Save Product",
                  "action": "none",
                  "targetScreen": "",
                  "id": "3d5078e0-4a8e-4047-b3ba-913ee97d41f3"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Preview Product",
                  "action": "go-to-screen",
                  "targetScreen": "detail",
                  "id": "15b595d1-630d-40b9-94a6-60b969e9ff7b"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#334155",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Back to Products",
                  "action": "go-to-screen",
                  "targetScreen": "home",
                  "id": "e3ea86df-f2b4-4412-a75a-dc2d2a21f1f4"
                }
              ],
              "id": "65de49fe-3178-45e0-9a07-171c83aa34a5"
            }
          ],
          "id": "07d84271-d736-4d9d-bf5c-d6d3d815593e"
        }
      ]
    },
    "cart": {
      "type": "ecommerce",
      "title": "Cart / Checkout",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "maxWidth": "",
          "height": "170px",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "16px",
          "shadow": true,
          "padding": "30px",
          "type": "banner",
          "title": "Cart / Checkout",
          "subtitle": "Review items, totals, and checkout actions.",
          "id": "db18d8d1-f4ed-4b6e-8587-a78246a1b32c"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 36,
              "justify": "start",
              "align": "start",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "62%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Noise Canceling Headphones",
                      "value": "$129 | Qty 1",
                      "targetScreen": "",
                      "id": "8401a4bd-0454-4d96-9dc4-312462dd9cc2"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Travel Backpack",
                      "value": "$74 | Qty 1",
                      "targetScreen": "",
                      "id": "ba284417-0d14-48e4-b271-ff4722ea4e69"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Shipping Address",
                      "value": "Add delivery address during checkout.",
                      "targetScreen": "",
                      "id": "136def4e-2fd4-4f96-a9f4-574b09062602"
                    }
                  ],
                  "id": "8e027119-4008-4e53-93b1-20899c945371"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "34%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Subtotal",
                      "value": "$203",
                      "targetScreen": "",
                      "id": "ee6d9d5a-9a99-45fd-a4d8-20ed61fd8e70"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Shipping",
                      "value": "$8",
                      "targetScreen": "",
                      "id": "07767c7f-b4e7-4762-b1ee-f0a26c29ad3b"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Tax",
                      "value": "$17",
                      "targetScreen": "",
                      "id": "7176a5e4-727b-45d6-8ef9-6884ee96cb24"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#312E81",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "24px",
                      "type": "card",
                      "title": "Total",
                      "value": "$228",
                      "targetScreen": "",
                      "id": "e018aeea-a317-4f9f-9392-eb283861f096"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "type": "row",
                      "gap": 12,
                      "justify": "start",
                      "align": "center",
                      "wrap": true,
                      "children": [
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#7C3AED",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Checkout",
                          "action": "none",
                          "targetScreen": "",
                          "id": "55b13705-885a-48f5-9284-981ee4294a0e"
                        },
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#1E293B",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Continue Shopping",
                          "action": "go-to-screen",
                          "targetScreen": "home",
                          "id": "da16ae33-28e9-4f74-9098-ead69683f829"
                        }
                      ],
                      "id": "b8cc01de-c4d9-49b0-b2f0-fadd8ed17f3c"
                    }
                  ],
                  "id": "b4cbf641-3683-48d7-9128-105f0ed73e7a",
                  "gap": 18
                }
              ],
              "id": "e5e26be3-26bf-4bd3-891a-e127b4e6a9b4"
            }
          ],
          "id": "9a03e52a-507e-4386-9b20-3fe14c1b27f7"
        }
      ]
    }
  },
  "navigation": [],
  "theme": {
    "primaryColor": "#7c3aed",
    "secondaryColor": "#06b6d4",
    "backgroundColor": "#0f172a",
    "surfaceColor": "#1e293b",
    "textColor": "#ffffff",
    "borderRadius": "12px",
    "fontFamily": "Inter",
    "spacing": "normal"
  },
  "components": []
};

const supportedBlockTypes = new Set([
  "hero",
  "banner",
  "card",
  "product-card",
  "button",
  "input",
  "table",
  "chart",
  "container",
  "row",
  "column",
  "grid",
  "spacer",
  "divider",
  "features",
  "cta"
]);

function getScreenKeys(schema) {
  return Object.keys(schema.screens || {});
}

function getInitialScreen(schema) {
  const screenKeys = getScreenKeys(schema);
  if (schema.entry && schema.screens?.[schema.entry]) return schema.entry;
  return screenKeys[0] || "home";
}

function getText(value, fallback = "") {
  return value === undefined || value === null || value === "" ? fallback : value;
}

function toCssSize(value, fallback = undefined) {
  if (value === undefined || value === null || value === "") return fallback;
  return typeof value === "number" ? value + "px" : value;
}

function getSurfaceStyle(block = {}) {
  return {
    backgroundColor: block.backgroundColor || undefined,
    color: block.textColor || undefined,
    borderRadius: block.borderRadius || undefined,
    padding: toCssSize(block.padding),
    margin: toCssSize(block.margin),
    height: toCssSize(block.height),
    maxWidth: block.maxWidth || undefined,
  };
}

function getLayoutStyle(block = {}) {
  return {
    ...getSurfaceStyle(block),
    "--gap": toCssSize(block.gap, "16px"),
  };
}

function getJustify(value) {
  if (value === "center") return "center";
  if (value === "end") return "flex-end";
  if (value === "between") return "space-between";
  return "flex-start";
}

function getAlign(value) {
  if (value === "start") return "flex-start";
  if (value === "end") return "flex-end";
  if (value === "stretch") return "stretch";
  return "center";
}

function getBlockTarget(block, currentScreen) {
  if (block.targetScreen && appSchema.screens?.[block.targetScreen]) {
    return block.targetScreen;
  }

  if (block.action === "next-screen") {
    const nextScreen = appSchema.flow?.[currentScreen];
    return nextScreen && appSchema.screens?.[nextScreen] ? nextScreen : null;
  }

  if (block.actions?.onClick?.type === "navigate") {
    const target = block.actions.onClick.target;
    return target && appSchema.screens?.[target] ? target : null;
  }

  return null;
}

function navigateTo(target, setCurrentScreen) {
  if (!target || !appSchema.screens?.[target]) return;
  setCurrentScreen(target);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function RenderChildren({ blocks = [], currentScreen, setCurrentScreen }) {
  if (!blocks.length) return null;

  return blocks.map((block, index) => (
    <RenderBlock
      key={block.id || block.type + "-" + index}
      block={block}
      currentScreen={currentScreen}
      setCurrentScreen={setCurrentScreen}
    />
  ));
}

function HeroBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);

  return (
    <section className={"hero hero-" + getText(block.variant, "default")} style={getSurfaceStyle(block)}>
      <div>
        <h1>{getText(block.title, "Hero Title")}</h1>
        <p>{getText(block.subtitle, "Hero subtitle")}</p>
        <div className="hero-actions">
          <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
            {getText(block.buttonLabel, "Get Started")}
          </button>
        </div>
      </div>
    </section>
  );
}

function BannerBlock({ block }) {
  return (
    <section className="banner" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Banner")}</h2>
      <p>{getText(block.subtitle, "Limited time offer")}</p>
    </section>
  );
}

function CardBlock({ block }) {
  return (
    <article className="card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Card title")}</h3>
      <p>{getText(block.value, "")}</p>
    </article>
  );
}

function ProductCardBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);
  const metaParts = String(getText(block.price, "$99")).split("|").map((part) => part.trim()).filter(Boolean);
  const primaryMeta = metaParts[0] || "$99";
  const secondaryMeta = metaParts.slice(1).join(" | ");

  return (
    <article className="product-card" style={getSurfaceStyle(block)}>
      <div className="product-media">
        {block.image ? (
          <img src={block.image} alt={getText(block.name, "Product")} />
        ) : (
          <span>{String(primaryMeta).startsWith("$") ? "Product" : "Video"}</span>
        )}
      </div>
      <h3>{getText(block.name, "Product")}</h3>
      <div className="product-meta">
        <span>{primaryMeta}</span>
        {secondaryMeta ? <small>{secondaryMeta}</small> : null}
      </div>
      <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
        {String(primaryMeta).startsWith("$") ? "View Product" : "Watch"}
      </button>
    </article>
  );
}

function ButtonBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);
  const style = {
    backgroundColor: block.backgroundColor || undefined,
    color: block.textColor || undefined,
    borderRadius: block.borderRadius || undefined,
    padding: toCssSize(block.padding),
    height: toCssSize(block.height),
    fontSize: toCssSize(block.fontSize),
    fontWeight: block.fontWeight || undefined,
    width: block.widthMode === "full" ? "100%" : "auto",
    maxWidth: block.maxWidth || undefined,
  };

  return (
    <button className="button" type="button" style={style} onClick={() => navigateTo(target, setCurrentScreen)}>
      {getText(block.label, "Button")}
    </button>
  );
}

function InputBlock({ block }) {
  return (
    <input
      className="input"
      type={getText(block.inputType, "text")}
      placeholder={getText(block.placeholder, block.field || "Input")}
      aria-label={getText(block.placeholder, block.field || "Input")}
    />
  );
}

function TableBlock({ block }) {
  const rows = block.rows || [
    ["Customer", "Status", "Amount"],
    ["Alex Morgan", "Paid", "$129"],
    ["Sam Taylor", "Pending", "$89"],
  ];

  return (
    <section className="table-card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Table")}</h3>
      <div className="table-scroll">
        <table>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) =>
                  rowIndex === 0 ? (
                    <th key={cellIndex}>{cell}</th>
                  ) : (
                    <td key={cellIndex}>{cell}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ChartBlock({ block }) {
  return (
    <section className="chart-card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Chart")}</h3>
      <div className="chart-bars">
        {[45, 70, 56, 88, 64].map((height, index) => (
          <span key={index} style={{ height: height + "%" }} />
        ))}
      </div>
    </section>
  );
}

function ContainerBlock({ block, currentScreen, setCurrentScreen }) {
  return (
    <section className="layout-container" style={getLayoutStyle(block)}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function RowBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    justifyContent: getJustify(block.justify),
    alignItems: getAlign(block.align),
    flexWrap: block.wrap === false ? "nowrap" : "wrap",
  };

  return (
    <section className="layout-row" style={style}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function ColumnBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    flexBasis: block.width || "0",
    flexGrow: block.grow === false ? 0 : 1,
  };

  return (
    <section className="layout-column" style={style}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function GridBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    "--columns": Math.max(1, Number(block.columns || 3)),
  };

  return (
    <section className="grid-section" style={style}>
      {block.title ? <h2>{block.title}</h2> : null}
      <div className="layout-grid">
        <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </div>
    </section>
  );
}

function SpacerBlock({ block }) {
  return <div style={{ height: toCssSize(block.height, "32px") }} />;
}

function DividerBlock({ block }) {
  return <hr style={{ borderColor: block.color || "#334155", borderWidth: toCssSize(block.thickness, "1px") }} />;
}

function FeaturesBlock({ block }) {
  const items = block.items?.length ? block.items : ["Fast", "Simple", "Responsive"];

  return (
    <section className="features" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Features")}</h2>
      <div className="feature-grid">
        {items.map((item, index) => (
          <article className="card" key={index}>
            <h3>{item}</h3>
            <p>{block.descriptions?.[index] || "A polished generated section."}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CtaBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);

  return (
    <section className="cta" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Ready to start?")}</h2>
      <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
        {getText(block.buttonLabel, "Get Started")}
      </button>
    </section>
  );
}

function UnsupportedBlock({ block }) {
  return (
    <section className="card">
      <h3>Unsupported block</h3>
      <p>{block.type}</p>
    </section>
  );
}

function RenderBlock({ block, currentScreen, setCurrentScreen }) {
  if (!block || !supportedBlockTypes.has(block.type)) {
    return <UnsupportedBlock block={block || { type: "unknown" }} />;
  }

  switch (block.type) {
    case "hero":
      return <HeroBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "banner":
      return <BannerBlock block={block} />;
    case "card":
      return <CardBlock block={block} />;
    case "product-card":
      return <ProductCardBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "button":
      return <ButtonBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "input":
      return <InputBlock block={block} />;
    case "table":
      return <TableBlock block={block} />;
    case "chart":
      return <ChartBlock block={block} />;
    case "container":
      return <ContainerBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "row":
      return <RowBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "column":
      return <ColumnBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "grid":
      return <GridBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "spacer":
      return <SpacerBlock block={block} />;
    case "divider":
      return <DividerBlock block={block} />;
    case "features":
      return <FeaturesBlock block={block} />;
    case "cta":
      return <CtaBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    default:
      return <UnsupportedBlock block={block} />;
  }
}

export default function App() {
  const screenKeys = useMemo(() => getScreenKeys(appSchema), []);
  const [currentScreen, setCurrentScreen] = useState(() => getInitialScreen(appSchema));
  const screen = appSchema.screens?.[currentScreen] || appSchema.screens?.[screenKeys[0]] || {
    title: "Untitled Screen",
    blocks: [],
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Exported RAPID App</p>
          <h1>{getText(appSchema.title, "RAPID App")}</h1>
        </div>
        <nav aria-label="Screens">
          {screenKeys.map((screenKey) => (
            <button
              key={screenKey}
              type="button"
              className={screenKey === currentScreen ? "active" : ""}
              onClick={() => navigateTo(screenKey, setCurrentScreen)}
            >
              {getText(appSchema.screens[screenKey]?.title, screenKey)}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <div className="screen-title">
          <p>Screen</p>
          <h2>{getText(screen.title, currentScreen)}</h2>
        </div>
        <RenderChildren blocks={screen.blocks} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </main>
    </div>
  );
}
