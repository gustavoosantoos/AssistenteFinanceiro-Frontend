import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FabComponent } from "./components/fab/fab.component";
import { PageHeaderComponent } from "./components/page-header/page-header.component";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgbModule
    ],
    providers: [
        FormBuilder
    ],
    declarations: [
        FabComponent,
        PageHeaderComponent
    ],
    exports: [
        FabComponent,
        PageHeaderComponent,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgbModule
    ]
})
export class SharedModule {
}
