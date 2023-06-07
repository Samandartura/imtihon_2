CREATE TABLE restoranlar(
  id INT PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(50) NOT NULL,
  adress VARCHAR(100) NOT NULL,
);

CREATE TABLE ovqatlar(
  id INT PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE mijozlar(
  id INT PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(50) NOT NULL, 
  adress VARCHAR(50) NOT NULL, 
  phone VARCHAR(50) NOT NULL 
);

CREATE TABLE buyuyrtmalar(
  id INT PRIMARY KEY auto_increment NOT NULL,
  menyu_id INT NOT NULL,
  mijoz_id INT NOT NULL,
  quantity INT NOT NULL,
  yetkazuvchi_id INT NOT NULL
);

CREATE TABLE yetkazuvchilar(
  id INT PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(50) NOT NULL, 
  phone VARCHAR(50) NOT NULL
);

CREATE TABLE menyu(
  id INT PRIMARY KEY auto_increment NOT NULL,
  ovqat_id INT NOT NULL,
  restoran_id INT NOT NULL,
  price INT NOT NULL
);