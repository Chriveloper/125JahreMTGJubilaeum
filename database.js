const supaUrl = 'https://cqlueytrxqlhdvhqqyse.supabase.co'
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxbHVleXRyeHFsaGR2aHFxeXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyNTQ5NTAsImV4cCI6MjAxMzgzMDk1MH0.Gr19SNLr2pNQFwxkHvKhK09DN-DjglQFPzbNY_p9A9o'
const database = supabase.createClient(supaUrl, supaAnonKey)
var length;

const supabaseFetch = async (table, columns, conditionType, conditionColumn, conditionValue, orderColumn, AscTrue) => {
    try {
        if (conditionColumn == undefined || conditionValue == undefined) {
            conditionColumn = ''
            conditionValue = ''
        }
        if (columns == undefined) {
            columns = '*'
        }
        if (orderColumn==undefined || AscTrue == undefined) {
            orderColumn = ''
            AscTrue = ''
        }    
  
        let query = database
            .from(table)
            .select(columns)
        
        if (conditionType != '' && conditionColumn != '' && conditionValue != '') {
            if (conditionType == 'eq') {
                query = query.eq(conditionColumn, conditionValue)
            }
            if (conditionType == 'neq') {
                query = query.neq(conditionColumn, conditionValue)
            }
            if (conditionType == 'gt') {
                query = query.gt(conditionColumn, conditionValue)
            }
            if (conditionType == 'lt') {
                query = query.lt(conditionColumn, conditionValue)
            }
        }

        if (orderColumn != '' && AscTrue != '') {
            query = query.order(orderColumn, { ascending: AscTrue })
        }



        const { data, error } = await query
        if (data) {
            console .log('success fetching', data)
            length = data.length;
        }
        if (error) {
        throw error
        }
    }
    catch (error) {
        console.log(error)
    }
}



const supabaseInsert = async (table, columns, values) => {
    try {
        const {data, error} = await database
            .from(table)
            .insert(
                rowFormatter(columns, values)
            )
            .select()
        if (data) {
            console.log('success inserting', data)
        }
        if (error) {
            throw error
        }
    }
    catch (error) {
        console.log(error)
        errorHandling(error, table)
    }
}

const supabaseUpdate = async (table, columns, values, conditionColumn, conditionValue) => {
    try {
        const {data, error} = await database
            .from(table)
            .update(
                rowFormatter(columns, values)
            )
            .eq(conditionColumn, conditionValue)
            .select()
        if (data) {
            console.log('success updating', data)
        }
        if (error) {
            throw error
        }
    } catch (error) {
        console.log(error)
    }
}


const supabaseDelete = async (table, conditionColumn, conditionValue) => {
    try {
        const {data, error} = await database
            .from(table)
            .delete()
            .eq(conditionColumn, conditionValue)
        if (data) {
            console.log('success deleting')
        }
        if (error) {
            throw error
        }
    } catch (error) {
        console.log(error)
    }
}

const supabaseDeleteAll = async (table) => {
    try {
        const {data, error} = await database
            .from(table)
            .delete()
            .neq('id', -1)
        if (data) {
            console.log('success deleting All', data)
        }
        if (error) {
            throw error
        }
    } catch (error) {
        console.log(error)
    }
}




function errorHandling (error, table) {
    if (table == 'spieler') {
        if (error.code == '23505') {
            toggle(inputBox);
            alert('Der von Ihnen gewählte Spitzname ist bereits vergeben, bitte laden Sie die Seite neun und suchen Sie sich einen anderen aus.');
        }
    }
}
    


function rowFormatter (columns, values) {
    let row = {}
    for (let i = 0; i < columns.length; i++) {
        row[columns[i]] = values[i]
    }
    return row
}

const fragenUpdates = database.channel('fragenUpdates')
    .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'fragen' },
        (payload) => {
            console.log('fragen', payload)
        }
    )
    .subscribe()

