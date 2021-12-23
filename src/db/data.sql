
/*USER*/
insert into user (id, userName, email, password, image, birthDate, isAdmin) values (1, 'Samaria Hutchcraft', 'shutchcraft0@umn.edu', 'aHbNj3hFtVK3', 'data:image', '1999-11-14', false);
insert into user (id, userName, email, password, image, birthDate, isAdmin) values (2, 'Birdie Dealtry', 'bdealtry1@simplemachines.org', '3jSD9aton', 'data:image', '1998-08-31', true);
insert into user (id, userName, email, password, image, birthDate, isAdmin) values (3, 'Daffy Whiteside', 'dwhiteside2@amazon.co.uk', 'fn3vJ7PcwG0', 'data:image', '1997-12-23', false);
insert into user (id, userName, email, password, image, birthDate, isAdmin) values (4, 'Drucie Hardbattle', 'dhardbattle3@icq.com', 'fyrjypR57G', 'data:image', '1998-03-05', false);
insert into user (id, userName, email, password, image, birthDate, isAdmin) values (5, 'Deva Goulding', 'dgoulding4@comsenz.com', 'kInUHhHb0Bt', 'data:image', '1993-05-20', true);
insert into user (id, userName, email, password, image, birthDate, isAdmin) values (6, 'Tarra Brislan', 'tbrislan5@de.vu', 'FzZU0RKWc', 'data:image', '1998-09-04-', true);
insert into user (id, userName, email, password, image, birthDate, isAdmin) values (7, 'Wyatan Brosini', 'wbrosini6@cbsnews.com', 'HsojSOG', 'data:image', '1998-07-07', true);
insert into user (id, userName, email, password, image, birthDate, isAdmin) values (8, 'Karine Menego', 'kmenego7@ask.com', 'qKPT9q', 'data:image/png', '1992-10-12', false);
insert into user (id, userName, email, password, image, birthDate, isAdmin) values (9, 'Sharia Tottle', 'stottle8@wordpress.org', 'cKI6rUB9q', 'data:image/png', '1994-04-21', true);
insert into user (id, userName, email, password, image, birthDate, isAdmin) values (10, 'Arthur MacKeller', 'amackeller9@ftc.gov', 'cziatI7pBk', 'data:image/png', '1998-11-01', false);

/*CATEGORY*/
insert into category (idCategory, categoryName) values (1,"tinto"),
(2,"Blanco"),
(3,"Rosado"),
(4,"Dulces"),
(5,"Espumantes");

/*PRODUCT*/
INSERT INTO product
(id, productName, productDescription, productImage, productPrice, idCategory, productOffer, productDiscount)
VALUES
(1, 'Anko Malbec', 'Aromas florales y especiados, sabores a frutas negras, fácil de tomar, muy bien balanceado.', "anko-malbec.jpg", 1200, 1, false, 0),
(2, 'Manos Negras', 'El Malbec es indiscutiblemente, la uva emblemática de Argentina. El oasis desértico de altitud de Mendoza ha proporcionado las condiciones ideales para que esta uva despliegue sus puntos fuertes como en ningún otro lugar del mundo. Los días de sol brillante dan un color negruzco y sabores de fruta oscura, mientras que las noches frescas de la montaña producen aromas a violeta y una textura suave y flexible.', "manos-negras-malbec1-.png", 1145, 1, true, 15),
(3, 'Prodigo - Torrontes', 'De color amarillo cristalino. En nariz se detectan aromas intensos a frutos cítricos, flores de naranja y jazmín. En boca se presenta muy aromático con finas notas minerales y agradable acidez. Persistente y elegante final. Sugerencias gastronómicas: Se presta para acompañar con “carpaccio” y comida oriental. Ideal con platos a base de langostinos y centolla.', "prodigo-torrontes1.png", 646, 2, false, 0),
(4, 'Anko - Torrontes', 'Aromas florales, principalmente jazmín. Perfil de cítricos en compañía de una acidez natural que le dan un acabado brillante y limpio.', "anko-torrontes1.jpg", 896, 2, true, 15),
(5, 'Saurus Pinot Noir', 'Es un vino del estilo de la Provence, región del sur de Francia reconocida por ser la cuna de los rosé más prestigiosos, de un perfil que expresa suavidad y frescura. Su delicado color rosa pálido está asociado a la elaboración de maceración corta. Se destaca su viva acidez, fluidez y amabilidad. Fácil de beber.', "saurus-estate-pinot-rose.png", 750, 3, false, 0),
(6, 'Taymante - Tardio', 'Color: Amarillo-dorado (miel). Aromas: a frutos tropicales y cítricos. Temperatura: beberse a 7ºC en copa tipo jerez.', "taymante-tardio.jpg", 650, 4, false, 0),
(7, 'antigal uno sauvignon blanc', 'La dulzura y el cuerpo de este vino dan sensación de felicidad', "antigal uno sauvignon blanc.jpg", 1000, 4, true, 10),
(8, 'Animal Extra Brut', 'Extra brut de caracter fuerte. Beber a 5°c en copa.', "animal-extra-brut1-.jpg", 650, 5, true, 15),
(9, 'Cruzat - Naranjo', 'Cruzat Naranjo es un espumante de uvas blancas con alma de tinto; es un vino espumoso obtenido a través de la maceración de uva Chardonnay -provenientes de Luján de Cuyo- fermentado con levaduras indígenas y con sus pieles, tal como se elaboran los vinos tintos. Es el primer y único vino espumoso naranjo del mercado argentino elaborado bajo método tradicional. Su elaboración está inspirada en técnicas ancestrales para alcanzar una extraordinaria concentración de color, aromas y sabores.', "cruzat-naranjo1-.png", 1250, 5, true, 15);

