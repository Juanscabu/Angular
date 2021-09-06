/*
import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";
import { Product } from "../products";
import { CartComponent } from "./cart.component";

class MockCartService {
    items: Product[] = [];
  }

beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        CartComponent,
        { provide: CartService, useClass: MockCartService, 
        },
        FormBuilder
      ]
    });
    // inject both the component and the dependent service.
    const comp = TestBed.inject(CartComponent);
    

    it('Deberia haber items', () => {
     
        expect(comp.items).toBeDefined;
      });

  });
*/