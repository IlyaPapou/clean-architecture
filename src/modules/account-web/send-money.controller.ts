import { MoneyEntity } from 'src/domain/entities/money.entity';
import { Query, Controller, Get, Inject } from '@nestjs/common';
import { SendMoneyCommand } from '../../domain/ports/in/send-money.command';
import {
  SendMoneyUseCase,
  SendMoneyUseCaseSymbol,
} from '../../domain/ports/in/send-money.use-case';

@Controller('account/send')
export class SendMoneyController {
  constructor(
    @Inject(SendMoneyUseCaseSymbol)
    private readonly _sendMoneyUseCase: SendMoneyUseCase,
  ) {}
  @Get('/')
  async sendMoney(
    @Query('sourceAccountId') sourceAccountId: string,
    @Query('targetAccountId') targetAccountId: string,
    @Query('amount') amount: number,
  ): Promise<{ result: boolean }> {
    const command: SendMoneyCommand = new SendMoneyCommand(
      sourceAccountId,
      targetAccountId,
      MoneyEntity.of(amount),
    );
    const result = await this._sendMoneyUseCase.sendMoney(command);
    return { result };
  }
}
