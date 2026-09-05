declare module 'bcryptjs' {
  const bcrypt: {
    hash(value: string, rounds: number): Promise<string>;
  };

  export default bcrypt;
}