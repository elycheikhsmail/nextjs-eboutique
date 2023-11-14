interface IUserBasic {
  identifier: string;
}

export interface IUserLogin extends IUserBasic {
  password: string;
}

interface IArticleBasic { 
  categorieId: number;
  categorie: string; // vente/achatldemade
  subcategorieId: number;
  subcategorie: string; //voiture/maison
  // المواصفات
 // options: Record<string, string | number>; // {marue:mercedes,moteur:disel}
  lieuId: number;
  lieu: string; // teyaret trarza
  //description: string;
  prix: number;
}

export interface IArticleInDB extends IArticleBasic {
  id: number;
  description: string;
  
  userId: number;
}
export interface IArticleInput extends IArticleBasic {
  description: string;
}
