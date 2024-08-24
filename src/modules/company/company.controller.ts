import {
  CompanyResponse,
  CompanyServiceController,
  CompanyServiceControllerMethods,
  CreateCompany,
} from "@shared/generated/company.proto";
import {
  SuccessResponse,
  Uid,
} from "@shared/generated/messages/messages.proto";
import { Observable } from "rxjs";

import { Controller } from "@nestjs/common";

import { CompanyService } from "./company.service";

@Controller()
@CompanyServiceControllerMethods()
export class CompanyController implements CompanyServiceController {
  constructor(private readonly companyService: CompanyService) {}

  createCompany(
    request: CreateCompany,
  ): Promise<SuccessResponse> | Observable<SuccessResponse> | SuccessResponse {
    return this.companyService.createCompany(request).then(() => {
      return { success: true };
    });
  }

  getCompany(
    request: Uid,
  ): Promise<CompanyResponse> | Observable<CompanyResponse> | CompanyResponse {
    return this.companyService.getCompany(request.uid);
  }
}
