import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from './users.service';

let testModules: TestingModule;
let usersService: UsersService;

class PrismaServiceMock {}

beforeEach(async () => {
  // modules
  testModules = await Test.createTestingModule({
    imports: [],
    providers: [
      UsersService,
      { provide: PrismaService, useClass: PrismaServiceMock },
    ],
  }).compile();
  await testModules.init();

  usersService = testModules.get<UsersService>(UsersService);
});

afterEach(() => jest.resetAllMocks());

describe('UsersService', () => {
  it('UsersService should be defined', () => {
    expect(usersService).toBeDefined();
  });
});
