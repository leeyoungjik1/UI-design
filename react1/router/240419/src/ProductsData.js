import React from "react";

const productsData = [
    {
        "name": "living room with brown wooden table and chairs",
        "designed": "Spacejoy",
        "produced": "Santa Monica",
        "description": "Corner is a bench designed for hard architectural features, such as low walls and slabs. It wraps around corners and provides a warmer and softer sitting experience.",
        "mainImgSrc": "https://images.unsplash.com/photo-1615529182904-14819c35db37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0MXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyMXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyMnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "brown wooden chairs and table near glass window",
        "designed": "Darshan Patel",
        "produced": "Houston, TX",
        "description": "Corner is a bench designed for hard architectural features, such as low walls and slabs. It wraps around corners and provides a warmer and softer sitting experience.",
        "mainImgSrc": "https://images.unsplash.com/photo-1587702068694-a909ef4aa346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0Mnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyM3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyNHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "green potted plant on table",
        "designed": "Collov Home Design",
        "produced": "Santa Monica",
        "description": "Corner is a bench designed for hard architectural features, such as low walls and slabs. It wraps around corners and provides a warmer and softer sitting experience.",
        "mainImgSrc": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0M3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1552324190-9e86fa095c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyNXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1613252036716-e1efc9788e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyNnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "woman jumping in gray 2-seat sofa",
        "designed": "Inside Weather",
        "produced": "Santa Monica",
        "description": "Corner is a bench designed for hard architectural features, such as low walls and slabs. It wraps around corners and provides a warmer and softer sitting experience.",
        "mainImgSrc": "https://images.unsplash.com/photo-1575501265016-ae78c708a09c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0NHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyN3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyOHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "brown wooden table on white background",
        "designed": "Sam Moghadam Khamseh",
        "produced": "Tehran, Iran",
        "description": "Corner is a bench designed for hard architectural features, such as low walls and slabs. It wraps around corners and provides a warmer and softer sitting experience.",
        "mainImgSrc": "https://images.unsplash.com/photo-1611486212355-d276af4581c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0NXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyOXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1517705008128-361805f42e86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzMHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "black cat",
        "designed": "Inside Weather",
        "produced": "Santa Monica",
        "description": "Corner is a bench designed for hard architectural features, such as low walls and slabs. It wraps around corners and provides a warmer and softer sitting experience.",
        "mainImgSrc": "https://images.unsplash.com/photo-1567016546367-c27a0d56712e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0Nnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1600585152220-90363fe7e115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzMXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzMnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "a living room filled with furniture and a fire place",
        "designed": "Spacejoy",
        "produced": "Santa Monica ",
        "description": "Corner is a bench designed for hard architectural features, such as low walls and slabs. It wraps around corners and provides a warmer and softer sitting experience.",
        "mainImgSrc": "https://images.unsplash.com/photo-1632829882891-5047ccc421bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0N3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzM3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzNHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "black chair on white snow",
        "designed": "Eugene Chystiakov",
        "produced": "Kyiv, Ukraine",
        "description": "The chair on the white",
        "mainImgSrc": "https://images.unsplash.com/photo-1581539250439-c96689b516dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0OHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1588082255003-1a93643ecf59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzNXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzNnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "black and white kitchen island",
        "designed": "R ARCHITECTURE",
        "produced": "Melbourne",
        "description": "More info: https://www.rarchitecture.com.au/parkdale_house_balwyn\nPhotography: Dylan James - https://dylanjames.com.au/",
        "mainImgSrc": "https://images.unsplash.com/photo-1600607686527-6fb886090705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0OXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1585264550248-1778be3b6368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzN3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1596079890687-58c51d24889a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzOHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "brown wooden table and chairs",
        "designed": "Denys Striyeshyn",
        "produced": "Lviv, Ukraine",
        "description": "Workspace from Prydumano Design\nFind us on instagram: \nlink : https://www.instagram.com/prydumano_design/?hl=uk",
        "mainImgSrc": "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1MHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzOXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0MHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "a chair sitting in front of an orange wall",
        "designed": "Marra",
        "produced": "Santa Monica",
        "description": "Corner is a bench designed for hard architectural features, such as low walls and slabs. It wraps around corners and provides a warmer and softer sitting experience.",
        "mainImgSrc": "https://images.unsplash.com/photo-1511974212900-b42a18e19eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1MXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1615529182904-14819c35db37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0MXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1587702068694-a909ef4aa346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0Mnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "yellow and white sofa chair",
        "designed": "Gabriela Fechet",
        "produced": "Piatra-Neamț, România",
        "description": "Orange Decor",
        "mainImgSrc": "https://images.unsplash.com/photo-1584901723137-bde3633dc2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1Mnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0M3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1575501265016-ae78c708a09c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0NHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "a gray couch with a wooden base on a gray background",
        "designed": "Hadi Yazdi Aznaveh",
        "produced": "Turkey",
        "description": "Designer : Parichehr Rezaee\nRender : Hadi Yazdi",
        "mainImgSrc": "https://images.unsplash.com/photo-1634497885778-152eb6fd543d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1M3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1611486212355-d276af4581c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0NXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1567016546367-c27a0d56712e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0Nnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "brown leather 2-seat sofa",
        "designed": "Martin Péchy",
        "produced": "Slovakia",
        "description": "Corner is a bench designed for hard architectural features, such as low walls and slabs. It wraps around corners and provides a warmer and softer sitting experience.",
        "mainImgSrc": "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1NHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1632829882891-5047ccc421bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0N3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1581539250439-c96689b516dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0OHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "living room with white curtains",
        "designed": "Spacejoy",
        "produced": "Santa Monica ",
        "description": "Spacejoy is a mery modern way to design your room online.",
        "mainImgSrc": "https://images.unsplash.com/photo-1615471618985-97108e2ba478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1NXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0OXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1MHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "gray and white sofa set",
        "designed": "Spacejoy",
        "produced": "Santa Monica ",
        "description": "Corner is a bench designed for hard architectural features, such as low walls and slabs. It wraps around corners and provides a warmer and softer sitting experience.",
        "mainImgSrc": "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1Nnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1511974212900-b42a18e19eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1MXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1584901723137-bde3633dc2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1Mnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "brown wooden table with chairs",
        "designed": "Jeffery Ho",
        "produced": "Shenzhen, China",
        "description": "Corner is a bench designed for hard architectural features, such as low walls and slabs. It wraps around corners and provides a warmer and softer sitting experience.",
        "mainImgSrc": "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1N3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1634497885778-152eb6fd543d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1M3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1NHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "beige rotary telephone",
        "designed": "Inside Weather",
        "produced": "Santa Monica",
        "description": "Corner is a bench designed for hard architectural features, such as low walls and slabs. It wraps around corners and provides a warmer and softer sitting experience.",
        "mainImgSrc": "https://images.unsplash.com/photo-1567016507665-356928ac6679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1OHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1615471618985-97108e2ba478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1NXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1Nnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "black leather padded brown wooden seat",
        "designed": "Sam Moghadam Khamseh",
        "produced": "Tehran, Iran",
        "description": "Corner is a bench designed for hard architectural features, such as low walls and slabs. It wraps around corners and provides a warmer and softer sitting experience.",
        "mainImgSrc": "https://images.unsplash.com/photo-1598300056393-4aac492f4344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1OXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1N3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1567016507665-356928ac6679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1OHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    },
    {
        "name": "black padded brown wooden armchair",
        "designed": "Behnam Norouzi",
        "produced": "Middle Earth",
        "description": "Minimalist Home Interior Photography.",
        "mainImgSrc": "https://images.unsplash.com/photo-1617364852223-75f57e78dc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw2MHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
        "subImgSrc": [
            "https://images.unsplash.com/photo-1598300056393-4aac492f4344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1OXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1617364852223-75f57e78dc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw2MHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"
        ]
    }
]


const subImg = [
    ["https://images.unsplash.com/photo-1540638349517-3abd5afc5847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyMXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyMnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyM3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyNHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1552324190-9e86fa095c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyNXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1613252036716-e1efc9788e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyNnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyN3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyOHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwyOXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1517705008128-361805f42e86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzMHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1600585152220-90363fe7e115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzMXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzMnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzM3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzNHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1588082255003-1a93643ecf59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzNXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzNnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1585264550248-1778be3b6368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzN3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1596079890687-58c51d24889a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzOHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHwzOXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0MHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk4Mnww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1615529182904-14819c35db37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0MXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1587702068694-a909ef4aa346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0Mnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0M3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1575501265016-ae78c708a09c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0NHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1611486212355-d276af4581c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0NXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1567016546367-c27a0d56712e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0Nnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1632829882891-5047ccc421bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0N3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0OHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1600607686527-6fb886090705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw0OXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1MHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1511974212900-b42a18e19eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1MXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1584901723137-bde3633dc2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1Mnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1634497885778-152eb6fd543d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1M3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1NHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1615471618985-97108e2ba478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1NXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1Nnx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1597072689227-8882273e8f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1N3x8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1567016507665-356928ac6679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1OHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"],
    ["https://images.unsplash.com/photo-1598300056393-4aac492f4344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw1OXx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1617364852223-75f57e78dc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE1OTR8MHwxfHNlYXJjaHw2MHx8ZnVybml0dXJlfGVufDB8fHx8MTcxMzUwNTk5MXww&ixlib=rb-4.0.3&q=80&w=1080"]
]


function ProductsData(){
    const productsData = []
    // let photosData  = null
    fetch(`https://api.unsplash.com/search/photos?query=furniture&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=20&page=3`)
    .then(photos => photos.json())
    .then(photos => {
        const photosData = photos.results
        const data1 = []
        const subphotos = []
        // console.log(photosData)
        photosData.forEach((photo, id)=>{
            const {alt_description, user:{name, location}, description, urls:{regular}} = photo
            const tempproductsData = {
                name: alt_description,
                designed: name,
                produced: location,
                description: description,
                mainImgSrc: regular,
                subImgSrc: subImg[id]
            }
            data1.push(tempproductsData)
            subphotos.push(regular)
        })
        console.log(data1)
        return photosData
    })
}
export default productsData