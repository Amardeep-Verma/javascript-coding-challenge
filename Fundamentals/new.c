// #include <stdio.h>
// int main()
// {
//     int rows = 3;
//     int cols = 3;

//     int matrix1[3][3] = {
//         {1, 2, 3},
//         {4, 5, 6},
//         {7, 8, 9}};

//     int matrix2[3][3] = {
//         {9, 8, 7},
//         {6, 5, 4},
//         {3, 2, 1}};

//     int resultMatrix[3][3];

//     for (int i = 0; i < rows; i++)
//     {
//         for (int j = 0; j < cols; j++)
//         {
//             resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
//         }
//     }

//     printf("Matrix 1:\n");
//     for (int i = 0; i < rows; i++)
//     {
//         for (int j = 0; j < cols; j++)
//         {
//             printf("%d\t", matrix1[i][j]);
//         }
//         printf("\n");
//     }

//     printf("\nMatrix 2:\n");
//     for (int i = 0; i < rows; i++)
//     {
//         for (int j = 0; j < cols; j++)
//         {
//             printf("%d\t", matrix2[i][j]);
//         }
//         printf("\n");
//     }

//     printf("\nSum of Matrices:\n");
//     for (int i = 0; i < rows; i++)
//     {
//         for (int j = 0; j < cols; j++)
//         {
//             printf("%d\t", resultMatrix[i][j]);
//         }
//         printf("\n");
//     }

//     return 0;
// }

#include <stdio.h>

int main()
{
    int a[2][2], trans[2][2], i, j;
    printf("Enter Matrix Elements:\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }
    printf("Matrix elements:\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            printf("%d ", a[i][j]);
        }
        printf("\n");
    }
    printf("Transpose elements:\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            trans[j][i] = a[i][j];
        }
    }
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            printf("%d ", trans[i][j]);
        }
        printf("\n");
    }

    return 0;
}
