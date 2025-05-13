function Range(start, end) {
    // Pythonのrangeと同じように動作
    const range = [];
    for (let i = start; i < end; i++) {
        range.push(i);
    }
    return range;
}

function generatePascalTriangle(rows) {
    const triangle = [];
    for (let i of Range(0, rows)) {
        const row = [1]; // 最初の要素は常に1
        if (triangle.length > 0) {
            const last_row = triangle[triangle.length - 1];
            for (let j of Range(0, last_row.length - 1)) {
                row.push(last_row[j] + last_row[j + 1]);
            }
            row.push(1); // 最後の要素も常に1
        }
        triangle.push(row);
    }

    // 三角形を整形して表示
    for (let i = 0; i < triangle.length; i++) {
        const row = triangle[i];
        console.log(' '.repeat(rows - i - 1) + row.join(' '));
    }
}

// 5行のパスカルの三角形を生成
generatePascalTriangle(5);