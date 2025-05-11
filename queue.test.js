const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0)

  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();
    queue.add('item1');
    expect(queue.size()).toBe(1);
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add('item1');
    expect(queue.peek()).toBe('item1');

  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add('item1');
    queue.add('item2');
    queue.add('item3');
    expect(queue.dequeue()).toBe('item1');
    expect(queue.dequeue()).toBe('item2');
    expect(queue.dequeue()).toBe('item3');
    // expect(queue.dequeue()).toBeUndefined();
  })
})