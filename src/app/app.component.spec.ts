import {AppComponent} from './app.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {RecordsService} from './records.service';


describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AppComponent ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
            providers: [RecordsService],
            imports: [RouterTestingModule, HttpClientTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });
    it('should verify an e-mail', () => {
       component.registerObject.email = 'Klaus@blog.com';
       expect(component.isValidEmail()).toBeTruthy();
    });
    /*it('should create', () => {
        expect(component).toBeTruthy();
    });*/
});