import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestInterceptor } from './test.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, //interceptor istifade olunarken elave olunmalidir
      useClass: TestInterceptor, //interceptor istifade olunarken elave olunmalidir
      multi: true, //interceptor istifade olunarken elave olunmalidir
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
