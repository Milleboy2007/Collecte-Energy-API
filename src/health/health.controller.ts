import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
    @Get()
    find(){
        return JSON.stringify(
            {
                "status": "ok",
                "service": "energy-api",
                "timestamp": new Date().toISOString()
            }
        )
    }
}
