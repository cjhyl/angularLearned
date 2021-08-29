import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NewsComponent } from './pages/news/news.component';
import { CompanyComponent } from './pages/company/company.component';
import { IndustryComponent } from './pages/industry/industry.component';
import { AuthGardGuard } from './guards/auth-gard.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { UnsaveGuard } from './guards/unsave.guard';
import { GetNameResolver } from './guards/get-name.resolver';


// 路由规则
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canDeactivate:[UnsaveGuard],
    resolve:{
      name: GetNameResolver// name为自定义属性
    }
  },
  {
    path: "about/:name",
    component: AboutComponent,
    canActivate: [AuthGardGuard]
  },
  {
    path: "news",
    component: NewsComponent,
    children: [
      {
        path: "company",
        component: CompanyComponent,
        outlet: "left"
      },
      {
        path: "industry",
        component: IndustryComponent,
        outlet: "right"
      }
    ]
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(m => {
      console.log('user.module',m)
      return m.UserModule
    })
  },
  {
    path: "",
    // 重定向
    redirectTo: "home",
    // 完全匹配
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    LayoutComponent,
    NavigationComponent,
    NotFoundComponent,
    NewsComponent,
    CompanyComponent,
    IndustryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  // 导出 Angular 路由功能模块，因为在根模块的根组件中使用了 RouterModule 模块中提供的路由插座组件
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
