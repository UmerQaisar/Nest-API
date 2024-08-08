import { Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';

@Controller('/posts')
export class PostController {

  @Get()
  index() {
    return 'Posts';
  }

  @Get('/:postId')
  show(@Param() params: { postId: number }) {
    return 'I am a post with id: ' + params.postId;
  }

  @Post()
  create(@Req() req: Request) {
    return req.body;
  }

  @Delete('/:postId')
  delete(@Param() params: { postId: number }) {
    return 'Deleting post with id: ' + params.postId;
  }
}
