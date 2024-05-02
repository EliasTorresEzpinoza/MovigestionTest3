import { TestBed } from '@angular/core/testing';
import { ReportViewComponent} from "../components/report-view/report-view.component";

describe('ReportViewService', () => {
  let service: ReportViewComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportViewComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
