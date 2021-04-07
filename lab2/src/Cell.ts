class Cell {
  //   cellValue: number;
  value: string = "";
  htmlElement: HTMLElement;
  id?: number;

  constructor(cell: HTMLElement) {
    this.htmlElement = cell;
  }

  setCellValue(value: string) {
    // TODO: napisz samemu metodę, która ustawia w
    // tabeli kółko i krzyżyk. Możesz przyjąć, że kółko
    // to wartość -1, krzyżyk to wartość 1, a 0 (zero)
    // oznacza pole nieustawione.
    // if (this.value === "") {
    this.value = value;
    this.htmlElement.innerHTML = this.value;
    // }
  }
}

export default Cell;
