import { HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { LanguageInterceptor } from "./interceptors/language.interceptor";


@NgModule({
    imports:[],
    exports:[],
    declarations:[],
    providers:[{provide:HTTP_INTERCEPTORS, useClass:LanguageInterceptor, multi:true}]
})
export class CoreModule{}

