/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { NoteService } from "../note.service";
import { NoteCreateInput } from "./NoteCreateInput";
import { Note } from "./Note";
import { NoteFindManyArgs } from "./NoteFindManyArgs";
import { NoteWhereUniqueInput } from "./NoteWhereUniqueInput";
import { NoteUpdateInput } from "./NoteUpdateInput";

export class NoteControllerBase {
  constructor(protected readonly service: NoteService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Note })
  async createNote(@common.Body() data: NoteCreateInput): Promise<Note> {
    return await this.service.createNote({
      data: data,
      select: {
        content: true,
        id: true,
        isImportant: true,
        title: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Note] })
  @ApiNestedQuery(NoteFindManyArgs)
  async notes(@common.Req() request: Request): Promise<Note[]> {
    const args = plainToClass(NoteFindManyArgs, request.query);
    return this.service.notes({
      ...args,
      select: {
        content: true,
        id: true,
        isImportant: true,
        title: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Note })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async note(
    @common.Param() params: NoteWhereUniqueInput
  ): Promise<Note | null> {
    const result = await this.service.note({
      where: params,
      select: {
        content: true,
        id: true,
        isImportant: true,
        title: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Note })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateNote(
    @common.Param() params: NoteWhereUniqueInput,
    @common.Body() data: NoteUpdateInput
  ): Promise<Note | null> {
    try {
      return await this.service.updateNote({
        where: params,
        data: data,
        select: {
          content: true,
          id: true,
          isImportant: true,
          title: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Note })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteNote(
    @common.Param() params: NoteWhereUniqueInput
  ): Promise<Note | null> {
    try {
      return await this.service.deleteNote({
        where: params,
        select: {
          content: true,
          id: true,
          isImportant: true,
          title: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
