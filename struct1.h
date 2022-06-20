#include <stdio.h>
#include "struct.h"
int main()
{
    int n;
    student s[10];
    printf("Limit:");
    scanf("%d", &n);
    
    for (int i=0; i < n; i++)
        scanf("%d",&s[i].a);
    
    for (int i=0; i < n; i++)
        printf("N:%d\n",s[i].a);

    return 0;
}
