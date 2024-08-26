import * as graphql from "@nestjs/graphql";
import { NoteResolverBase } from "./base/note.resolver.base";
import { Note } from "./base/Note";
import { NoteService } from "./note.service";

@graphql.Resolver(() => Note)
export class NoteResolver extends NoteResolverBase {
  constructor(protected readonly service: NoteService) {
    super(service);
  }
}
