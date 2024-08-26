import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NoteService } from "./note.service";
import { NoteControllerBase } from "./base/note.controller.base";

@swagger.ApiTags("notes")
@common.Controller("notes")
export class NoteController extends NoteControllerBase {
  constructor(protected readonly service: NoteService) {
    super(service);
  }
}
