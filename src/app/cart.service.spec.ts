import { TestBed } from "@angular/core/testing";
import { CartService } from "./cart.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
describe('CartService', () => {
beforeEach(() =>
    TestBed.configureTestingModule({ imports: [
        HttpClientTestingModule
      ],}));

    it("should be created", () => {
        const service: CartService = TestBed.get(CartService);
        expect(service).toBeTruthy();
    });

    it("should addToCart", () => {
        const service: CartService = TestBed.get(CartService);
        let products = service.getItems();
        let producto =  {
            id: 1,
            name: 'Phone XL',
            price: 799,
            description: 'A large phone with one of the best screens'
          };
        service.addToCart(producto)
        expect(products[0]).toEqual(producto);
    });




});


/*  Ejemlo
// Straight Jasmine testing without Angular's testing support
describe('ValueService', () => {
    let service: ValueService;
    beforeEach(() => { service = new ValueService(); });
  
    it('#getValue should return real value', () => {
      expect(service.getValue()).toBe('real value');
    });
  
    it('#getObservableValue should return value from observable',
      (done: DoneFn) => {
      service.getObservableValue().subscribe(value => {
        expect(value).toBe('observable value');
        done();
      });
    });
  
    it('#getPromiseValue should return value from a promise',
      (done: DoneFn) => {
      service.getPromiseValue().then(value => {
        expect(value).toBe('promise value');
        done();
      });
    });
  });

    let masterService: MasterService;
    let valueServiceSpy: jasmine.SpyObj<ValueService>;

    beforeEach(() => {
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);

    TestBed.configureTestingModule({
        // Provide both the service-to-test and its (spy) dependency
        providers: [
        MasterService,
        { provide: ValueService, useValue: spy }
        ]
    });
    // Inject both the service-to-test and its (spy) dependency
    masterService = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
    });

    it('#getValue should return stubbed value from a spy', () => {
  const stubValue = 'stub value';
  valueServiceSpy.getValue.and.returnValue(stubValue);

  expect(masterService.getValue())
    .toBe(stubValue, 'service returned stub value');
  expect(valueServiceSpy.getValue.calls.count())
    .toBe(1, 'spy method was called once');
  expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
    .toBe(stubValue);
});


  */