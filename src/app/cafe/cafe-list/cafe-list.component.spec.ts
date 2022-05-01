/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';

import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListComponent ],
      providers: [CafeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    component.cafes = [];
    //CAFE 1
    component.cafes.push(new Cafe(faker.datatype.number(),
    faker.commerce.productName(),
    faker.commerce.productMaterial(),
    faker.commerce.department(),
    faker.lorem.sentence(),
    faker.datatype.number(),
    faker.image.imageUrl()));
    //CAFE 2
    component.cafes.push(new Cafe(faker.datatype.number(),
    faker.commerce.productName(),
    faker.commerce.productMaterial(),
    faker.commerce.department(),
    faker.lorem.sentence(),
    faker.datatype.number(),
    faker.image.imageUrl()));
    //CAFE 3
    component.cafes.push(new Cafe(faker.datatype.number(),
    faker.commerce.productName(),
    faker.commerce.productMaterial(),
    faker.commerce.department(),
    faker.lorem.sentence(),
    faker.datatype.number(),
    faker.image.imageUrl()));
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 3 cafes', () => {
    expect(component.cafes.length).toBe(3);
    const rows = fixture.debugElement.queryAll(By.css('tr'));
    //3 CAFE + Header
    expect(rows.length).toBe(4);
  });

});
