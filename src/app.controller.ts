import { Controller, Get, Res, Render, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { title } from 'process';
//Need to adjust this to show the home page of the application
//This is the main application vontroller for basic endpoints


@ApiTags('Application')
@Controller('Ram-Docker-App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Render Home Page',
    description: 'Renders the home page of the application'
   })
  @ApiResponse({
    status: 200,
   })
   @Render('homepage')
   showForm(){
    return{
      title: 'Welcome to Ram Nest Docker App'
    }
   }

   @Post()
   @Render('homepage')

   
   
  getHello(): string {
    return this.appService.getHello();
  }
}
