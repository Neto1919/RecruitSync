import { NextResponse } from 'next/server';
import pool from "@/lib/db";

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM aluno');
    client.release();
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Erro buscando alunos:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request) {
    try {
      const { nome, matricula } = await request.json();
      const client = await pool.connect();
      const result = await client.query(
        'INSERT INTO aluno (nome, matricula) VALUES ($1, $2) RETURNING *',
        [nome, matricula]
      );
      client.release();
      return NextResponse.json(result.rows[0], { status: 201 });
    } catch (error) {
      console.error('Error adding aluno:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }