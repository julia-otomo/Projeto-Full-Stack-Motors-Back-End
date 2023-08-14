import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

import { SalesAd, SalesImages } from "../entities/salesAd.entity";
import { Address } from "../entities/addresses.entity";
import { User } from "../entities/users.entity";

const salesAdRepo: Repository<SalesAd> = AppDataSource.getRepository(SalesAd);
const salesImageRepo: Repository<SalesImages> =
    AppDataSource.getRepository(SalesImages);
const usersRepo: Repository<User> = AppDataSource.getRepository(User);
const addressesRepo: Repository<Address> = AppDataSource.getRepository(Address);

const repositories = {
    salesAdRepo,
    salesImageRepo,
    usersRepo,
    addressesRepo,
};

export default repositories;
