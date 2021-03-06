import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Omit<Transaction, 'id'>): Transaction {
    if (type == 'outcome' && value > this.transactionsRepository.getBalance().total)
      throw new Error("");

    var transaction = this.transactionsRepository.create({ title, value, type });
    return transaction;
  }
}

export default CreateTransactionService;
