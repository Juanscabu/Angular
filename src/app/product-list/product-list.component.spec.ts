import { TestBed } from "@angular/core/testing"; 
import { By } from "@angular/platform-browser";
import { products } from "../products";
import { ProductListComponent } from "./product-list.component";

describe('Lista de productos', () => {
    beforeEach(async () => {
      TestBed.configureTestingModule({
        declarations: [
            ProductListComponent
        ],
      }).compileComponents();
    });
  
    /*
    it('Deberia traer productos', () => {
      const fixture = TestBed.createComponent(ProductListComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.products).toEqual(Number);
    });
    */
    it('El titulo debería ser Products', () => {
      const fixture = TestBed.createComponent(ProductListComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Products');
    }),

    it('Funciona alerta onNotify', () => {
      const comp = new ProductListComponent();
      spyOn(window, "alert");
      comp.onNotify()
      expect(window.alert).toHaveBeenCalledWith('You will be notified when the product goes on sale')
    });

    it('Funciona click en alerta onShare', () => {
      const fixture = TestBed.createComponent(ProductListComponent);
      
      fixture.detectChanges();
      let buttonElement = fixture.debugElement.nativeElement.querySelector('.share');
    
      spyOn(window, "alert").and.callThrough();
      buttonElement.click();
      expect(window.alert).toHaveBeenCalledWith('The product has been shared!')
    });
  }); 