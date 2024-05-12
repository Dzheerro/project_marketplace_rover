import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoryComponent } from './components/category/category.component';
import { CreateAnItemComponent } from './components/header/create-an-item/create-an-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterComponent } from './components/header/filter/filter.component';
import { ShoppingCartComponent } from './components/header/shopping-cart/shopping-cart.component';
import {
  ShoppingCartBuyComponent,
} from './components/header/shopping-cart/shopping-cart-buy/shopping-cart-buy.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'home/:category', component: CategoryComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'shopping-cart/seller', component: ShoppingCartBuyComponent},
  // {
  //   path: 'shopping-cart', component: ShoppingCartComponent,
  //   children: [
  //     {path: 'seller', component: ShoppingCartBuyComponent},
  //   ],
  // },
  {
    path: '', runGuardsAndResolvers: 'always',
    canActivate: [],
    children: [
      {path: 'home/filter', component: FilterComponent},
      {path: 'create-an-item', component: CreateAnItemComponent},
      {path: 'navbar/category-product', component: NavbarComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'favorite', component: FavoriteComponent},
    ],
  },
];

export class AppRoutingModule {
}
