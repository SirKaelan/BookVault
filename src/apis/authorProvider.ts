class AuthorProvider {
  // Methods
  // TODO: Create type for promise
  async getById(id: number): Promise<number> {
    return id;
  }
}

export const authorProvider = new AuthorProvider();
