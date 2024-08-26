import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NoteServiceBase } from "./base/note.service.base";

@Injectable()
export class NoteService extends NoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
