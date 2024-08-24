import {
  Company,
  CompanyServiceController,
  CompanyServiceControllerMethods,
} from "@shared/generated/company.proto";
import { SuccessResponse } from "@shared/generated/messages/messages.proto";
import { Observable } from "rxjs";

import { Controller } from "@nestjs/common";

import { CompanyService } from "./company.service";

@Controller()
@CompanyServiceControllerMethods()
export class CompanyController implements CompanyServiceController {
  constructor(private readonly companyService: CompanyService) {}

  createCompany(
    request: Company,
  ): Promise<SuccessResponse> | Observable<SuccessResponse> | SuccessResponse {
    return this.companyService.createCompany(request).then(() => {
      return { success: true };
    });
  }
}
