import { status } from "@grpc/grpc-js";
import {
  CompanyResponse,
  CreateCompany,
} from "@shared/generated/company.proto";

import { Injectable } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";

import { PrismaService } from "src/common/modules/prisma/prisma.service";

@Injectable()
export class CompanyService {
  constructor(private readonly prismaService: PrismaService) {}

  async createCompany(companyData: CreateCompany) {
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

  async getCompany(uid: string): Promise<CompanyResponse> {
    const res = await this.prismaService.company.findUnique({
      where: {
        uid,
      },
    });

    if (!res) {
      throw new RpcException({
        code: status.NOT_FOUND,
        message: "Company not found",
      });
    }

    return res;
  }
}
