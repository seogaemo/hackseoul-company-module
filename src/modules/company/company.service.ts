import { Company } from "@shared/generated/company.proto";

import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/common/modules/prisma/prisma.service";

@Injectable()
export class CompanyService {
  constructor(private readonly prismaService: PrismaService) {}

  async createCompany(companyData: Company) {
    return this.prismaService.company.create({
      data: {
        name: companyData.name,
        owner: companyData.owner,
        ownerPhoto: "",
        phone: companyData.phone,
        email: companyData.email,
        address: companyData.address,
        licenseNumber: companyData.licenseNumber,
        businessNumber: companyData.businessNumber,
        type: companyData.type,
      },
    });
  }
}
